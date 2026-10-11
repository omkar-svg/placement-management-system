# SDC Contributor Guide 🚀

> **Welcome to the SDC Placement Portal Team!**  
> Whether you work on **Frontend**, **Backend**, or **Database**, here is our quick guide on how we build and ship features together.

---

## 🛑 The Simple Rules

1. **Pick 1 task at a time:** Find an issue on GitHub, comment on it, and build that specific task.
2. **Frontend:** Use Tailwind CSS (no new `.css` files) and connect to real backend APIs.
3. **Backend & Database:** Test your routes with Postman/curl, and update `docs/BACKEND_API_CONTRACT.md` when adding new endpoints.

---

## 🔄 The 4 Steps to Build Something

### 1. Pick a Task on GitHub
* Go to the **GitHub Issues** tab.
* Find a task and comment: *"I'll take this!"*

### 2. Make a New Branch
```bash
git checkout main
git pull
git checkout -b feat/your-task-name
```

### 3. Build & Test Locally
* **If working on Frontend:**
  ```bash
  cd frontend
  npm run dev      # View in browser at http://localhost:3000
  npm run build    # Make sure it builds without errors
  ```
* **If working on Backend / Database:**
  ```bash
  cd backend
  npm run dev                  # Server runs on port 5000
  npx prisma migrate dev       # If updating database schema
  ```

### 4. Send Your Code (Pull Request)
* Push your branch to GitHub:
  ```bash
  git add .
  git commit -m "Brief description of what you did"
  git push origin feat/your-task-name
  ```
* Open a **Pull Request** on GitHub.
* Add your proof (screenshot for UI, Postman/terminal output for Backend).
* Tag a team lead for review! Once approved, your code merges into `main`! 🎉
