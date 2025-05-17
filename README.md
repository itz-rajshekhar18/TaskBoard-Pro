# TaskBoard Pro

## Project Overview
TaskBoard Pro is an advanced task collaboration platform designed to help teams manage projects and tasks efficiently. It features user authentication, project and task management with Kanban-style drag-and-drop, and workflow automation to streamline team collaboration.

---

## Features

- **User Authentication:**  
  Login using Google OAuth (Firebase).

- **Project Management:**  
  Create projects, invite members via email, and restrict access to project members only.

- **Task Management:**  
  Create, assign, and manage tasks with titles, descriptions, due dates, and assignees. Move tasks across default statuses: *To Do*, *In Progress*, *Done* using a Kanban board. Supports drag-and-drop.

- **Workflow Automation:**  
  Define rules such as automatic badge assignment, status changes based on task events, and notifications on due dates.

- **Backend APIs:**  
  RESTful endpoints for authentication, projects, tasks, automations, and notifications.

- **Bonus Features (planned):**  
  Real-time updates via WebSockets, task commenting system, and user badges.

---

## Tech Stack

- **Frontend:** React.js, React Beautiful DnD, Axios, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Authentication:** Google OAuth via Firebase  
- **Other:** dotenv for environment variables, cors for Cross-Origin Resource Sharing

---

## Project Structure

/taskboard-pro
/client # React frontend
/src
/components
/pages
/services
App.js
index.js
/server # Express backend
/controllers
/models
/routes
/middlewares
server.js
.env # Environment variables
README.md
package.json


---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krishna-Sharma-g/taskboard-pro.git
   cd taskboard-pro

2. **Setup backend:**
cd server

npm install

4. **Setup FrontEnd:**
cd ../client

npm install

6. **Configure environment variables:**

Create a .env file inside the server folder with:

MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
JWT_SECRET=your_jwt_secret_key


5. **Run Backend:**

   cd ../server
   
   npm start

7. **Run FrontEnd:**

   cd ../client
   
   npm start

## API Documentation (Summary)

Endpoint	Method	Description
/auth/login	POST	Login or signup via Google OAuth
/projects	GET	Get all projects for user
/projects	POST	Create a new project
/projects/:id	GET	Get project details
/tasks	POST	Create a new task
/tasks/:id	PUT	Update task (e.g., status change)
/automations	POST	Create a new automation rule
/notifications	GET	Get notifications (optional)

## Database Schema Overview

Users: Stores user profile information (name, email, Google ID).
Projects: Title, description, list of member user IDs.
Tasks: Title, description, due date, assignee, status, project reference.
Automations: Rules tied to project events.
Notifications: (Optional) Alerts related to tasks and automations.

## Challenges & Learnings

Implementing drag-and-drop functionality and keeping frontend/backend data synchronized was challenging but solved using react-beautiful-dnd.
Designing proper authorization to ensure only project members can access data.
Managing automation rules logic on the backend to trigger actions correctly.
Future Improvements
Real-time collaboration with WebSockets.
Adding comments on tasks.
Enhanced workflow automation with user-configurable rules.
User badges based on task completion.
