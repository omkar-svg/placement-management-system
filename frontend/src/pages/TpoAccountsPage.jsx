import React, { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import TpoAccountsToolbar from '../components/tpo-accounts/TpoAccountsToolbar.jsx';
import TpoAccountsTable from '../components/tpo-accounts/TpoAccountsTable.jsx';
import { getTpoAccounts } from '../services/tpoAccountsService.js';
import './TpoAccountsPage.css';

// TPO Accounts page. Loads through tpoAccountsService.js on mount. The
// backend has no endpoint for listing users yet (see that service), so the
// list is empty and the actions that would change an account (Add,
// Activate, Suspend) are not offered. Search/filter are ready for when
// real accounts exist.
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
        addDisabledReason="Not available yet — the backend has no endpoint for managing TPO accounts."
      />

      {isLoading ? (
        <p className="tpo-accounts-page__loading">Loading TPO accounts…</p>
      ) : (
        <TpoAccountsTable accounts={filteredAccounts} />
      )}
    </DashboardLayout>
  );
}

export default TpoAccountsPage;
