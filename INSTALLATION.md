# Installation Guide for Council Website

## Prerequisites
- Node.js (v14.x or later)
- MongoDB (v4.x or later)
- Git

## Clone the Repository
First, clone the repository to your local machine:
```sh
git clone https://github.com/yourusername/council-website.git
cd council-website
```

## Backend Setup
Navigate to the backend directory and install the dependencies:
```sh
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` directory with the following content:
```sh
MONGO_URI=<your_mongodb_connection_string>
EMAIL_USER=<your_email_user>
EMAIL_PASS=<your_email_password>
JWT_SECRET=<your_jwt_secret>
```

## Frontend Setup
Navigate to the frontend directory and install the dependencies:
```sh
cd ../frontend
npm install
```

### Environment Variables
Create a `.env` file in the `frontend` directory with the following content:
```sh
REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID=<your_google_analytics_tracking_id>
REACT_APP_RECAPTCHA_SITE_KEY=<your_recaptcha_site_key>
```

## Running the Application

### Backend
To start the backend server, navigate to the `backend` directory and run:
```sh
npm start
```

### Frontend
To start the frontend development server, navigate to the `frontend` directory and run:
```sh
npm start
```

Then open your browser and navigate to `http://localhost:3000`.

## Platform-Specific Instructions

### Windows
1. **Install Node.js and MongoDB**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).

2. **Clone the Repository**:
   - Open Command Prompt or PowerShell and run the clone command mentioned above.

3. **Install Dependencies**:
   - Follow the Backend and Frontend setup instructions mentioned above.

4. **Start MongoDB**:
   - Open Command Prompt or PowerShell and run `mongod`.

5. **Run the Application**:
   - Follow the Running the Application instructions mentioned above.

### macOS
1. **Install Homebrew** (if not already installed):
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js and MongoDB**:
   ```sh
   brew install node
   brew tap mongodb/brew
   brew install mongodb-community@4.4
   ```

3. **Clone the Repository**:
   - Open Terminal and run the clone command mentioned above.

4. **Install Dependencies**:
   - Follow the Backend and Frontend setup instructions mentioned above.

5. **Start MongoDB**:
   ```sh
   brew services start mongodb/brew/mongodb-community
   ```

6. **Run the Application**:
   - Follow the Running the Application instructions mentioned above.

### Linux
1. **Install Node.js and MongoDB**:
   - For Debian/Ubuntu:
     ```sh
     sudo apt update
     sudo apt install -y nodejs npm
     curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
     sudo add-apt-repository "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse"
     sudo apt update
     sudo apt install -y mongodb-org
     ```

   - For CentOS/RHEL:
     ```sh
     sudo yum install -y epel-release
     sudo yum install -y nodejs npm
     cat <<EOF | sudo tee -a /etc/yum.repos.d/mongodb-org-4.4.repo
     [mongodb-org-4.4]
     name=MongoDB Repository
     baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.4/x86_64/
     gpgcheck=1
     enabled=1
     gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
     EOF
     sudo yum install -y mongodb-org
     ```

2. **Clone the Repository**:
   - Open Terminal and run the clone command mentioned above.

3. **Install Dependencies**:
   - Follow the Backend and Frontend setup instructions mentioned above.

4. **Start MongoDB**:
   ```sh
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

5. **Run the Application**:
   - Follow the Running the Application instructions mentioned above.

## Troubleshooting
- **MongoDB Connection Error**: Ensure that MongoDB is running and the connection string in `.env` is correct.
- **Port Conflicts**: Ensure that the ports used by the backend (default: 5000) and frontend (default: 3000) are not being used by other applications.
- **Environment Variables**: Ensure that all required environment variables are set correctly in the `.env` files.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.