# UI Design Quick-Guide 🎨

> **The Rule:** Do not write custom CSS. Copy the Tailwind classes from this cheat-sheet!

---

## 1. Official College Colors
* **Deep Navy (Brand):** `#0b1f3a` ➔ `bg-[#0b1f3a]`, `text-[#0b1f3a]`
* **College Gold (Accent):** `#ffc52c` ➔ `bg-[#ffc52c]`, `text-[#07152d]`, hover `bg-[#ffd45c]`
* **Page Background:** `bg-slate-50`
* **Card Surface:** `bg-white` with `border border-slate-200`

---

## 2. Status Badges (Copy-Paste)
```jsx
// 🟢 Selected / Placed
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
  Selected
</span>

// 🟡 Shortlisted
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
  Shortlisted
</span>

// 🔵 Eligible / Upcoming
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
  Eligible
</span>

// 🔴 Rejected
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
  Rejected
</span>
```

---

## 3. Standard Buttons (Copy-Paste)
```jsx
// Gold Primary CTA
<button className="px-4 py-2 rounded-lg text-sm font-bold bg-[#ffc52c] text-[#07152d] hover:bg-[#ffd45c] cursor-pointer">
  Apply Now
</button>

// Dark Navy Button
<button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#0b1f3a] text-white hover:bg-[#12345f] cursor-pointer">
  Save Changes
</button>

// Outline / Cancel Button
<button className="px-4 py-2 rounded-lg text-sm font-semibold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 cursor-pointer">
  Cancel
</button>
```

---

## 4. Standard Card Box
```jsx
<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
  <h3 className="text-lg font-bold text-slate-900 mb-4">Card Title</h3>
  {/* Content goes here */}
</div>
```

---

## 5. Standard Text Input
```jsx
<div className="space-y-1">
  <label className="block text-xs font-semibold text-slate-700">PRN Number</label>
  <input
    type="text"
    placeholder="e.g. 21UAI045"
    className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1f3a]"
  />
</div>
```
