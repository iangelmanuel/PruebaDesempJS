
# Reservation System SPA

Project to understand the structure of a single-page application (SPA), improve its logic and distribution of responsibilities, as well as API usage.

## Config the work enviroment

Install dependecies:

```bash
npm install
```
---

Run the project:

```bash
npm run dev  "it will run both (project + API)"
```

## 📖 Description
The main objective of this project is to understand modern web development by implementing a robust SPA architecture using Vanilla JavaScript, Tailwind CSS for responsive design, and a simulated backend using JSON Server.

The application evolved from a static site into a task management platform with a comprehensive authentication and role-based access control system.

# Deploy
Deploy from Netlify: https://reservationsystemspa.netlify.app/

### 🔐 Key Features:
- **User Management:** Account registration, login, profile data updates, and account deletion.
- **Access Control:** Restriction of views and routes based on authentication status and user role (User / Administrator).
- **Task CRUD:** Standard users can create, view, edit, and delete their own tasks.
- **Administration Panel:** The administrator user has access to a global panel to manage (full CRUD) all users and all tasks in the system.

## 📂 Project Structure

The project is divided in two main parts:

- **`/src`**: Contains the user interface built with **Vite** and **Tailwind CSS**.
- **`/server`**: Contains the backend, simulating the data server using JSON Server. **json-server**.

### Administrador (admin)

he can:

- Look at all the reservations
- Create Reseverations
- Edit Reservations
- Delete reservations
- Aprove reservations or decline those
- Manage Workspace
- Enter to admin modules

### Usuario (user)

Puede:

- Look Available Workspapces
- Create Reseverations
- Only look at his reservations
- Edit his reservations
- Cancel his reservations

---


```bash
src
├── assets
├── components
│   └── Sidebar.js
├── controllers
│   └── login.controller.js
├── router
│   └── router.js
├── views
│   ├── loginView.js
│   ├── homeView.js
│   └── notFound.js
├── utils.js
├── main.js
└── style.css
```

## 🛠️ Technologies Used

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS.
- **Build Tool:** Vite.
- **Backend (Simulated):** JSON Server.

## 🚀 Installation

1.  Install the dependencies in the folder `PERFORMANCETESTJS-PDM3-C5 `:
    ```bash
    npm install
    npm run dev
    ```
2.  Set up and start your server in the folder `server`:
    ```bash
    cd server
    npm install
    npx json-server database.json


## 👨‍💻 Author

- GitHub: **[Nicolas Guarin rodriguez]()**
- Mail: **nicolasguarinr@gmail.com**

## 📄 License

This project was created for educational purposes and personal learning.
