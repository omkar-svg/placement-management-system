import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import TpoAccountsToolbar from '../components/tpo-accounts/TpoAccountsToolbar.jsx';
import TpoAccountsTable from '../components/tpo-accounts/TpoAccountsTable.jsx';
import { getTpoAccounts, updateTpoAccountStatus } from '../services/tpoAccountsService.js';
import './TpoAccountsPage.css';

// TPO Accounts page. Fetches through tpoAccountsService.js on mount, same
// pattern as AdminDashboardPage. Starts as an empty list — see the data
// policy comment in tpoAccountsService.js — and is fully wired up to
// search/filter/activate/suspend once real accounts exist.
function TpoAccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    let isMounted = true;

    async function loadAccounts() {
      const data = await getTpoAccounts();
      if (isMounted) {
        setAccounts(data);
        setIsLoading(false);
      }
    }

    loadAccounts();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) => {
      const matchesStatus = statusFilter === 'all' || account.status === statusFilter;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        term === '' ||
        account.institution.toLowerCase().includes(term) ||
        account.contactName.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [accounts, statusFilter, searchTerm]);

  const handleStatusChange = async (id, status) => {
    setAccounts((current) => current.map((account) => (account.id === id ? { ...account, status } : account)));
    await updateTpoAccountStatus(id, status);
  };

  const handleAddAccount = () => {
    // Stub: real usage would open a form / modal that POSTs a new
    // account through tpoAccountsService.js once that endpoint exists.
    console.info('[TpoAccountsPage] Add TPO Account clicked — no backend endpoint wired up yet.');
  };

  return (
    <DashboardLayout>
      <div className="tpo-accounts-page__intro">
        <h1>TPO Accounts</h1>
        <p>Manage Training &amp; Placement Officer accounts across institutions.</p>
      </div>

      <TpoAccountsToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onAddAccount={handleAddAccount}
      />

      {isLoading ? (
        <p className="tpo-accounts-page__loading">Loading TPO accounts…</p>
      ) : (
        <TpoAccountsTable accounts={filteredAccounts} onStatusChange={handleStatusChange} />
      )}
    </DashboardLayout>
  );
}

export default TpoAccountsPage;
