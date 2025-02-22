// commands.js - Updated with precise groupings
const commandDB = [
    // Python Environment Setup
    {
        title: "Create Python Virtual Environment",
        language: "python",
        category: "environment",
        description: "Create and activate a virtual environment",
        steps: [
            {
                command: "python -m venv myenv",
                description: "Create virtual environment"
            },
            {
                command: "myenv\\Scripts\\activate",
                description: "Activate (Windows)",
                os: "windows"
            },
            {
                command: "source myenv/bin/activate",
                description: "Activate (Unix)",
                os: "unix"
            }
        ]
    },

    // Python Package Management
    {
        title: "Manage Python Dependencies",
        language: "python",
        category: "packages",
        description: "Work with Python packages",
        steps: [
            {
                command: "pip install package_name",
                description: "Install a package"
            },
            {
                command: "pip install -r requirements.txt",
                description: "Install from requirements file"
            },
            {
                command: "pip freeze > requirements.txt",
                description: "Generate requirements file"
            }
        ]
    },

    // Node.js Project Setup
    {
        title: "Initialize Node.js Project",
        language: "javascript",
        category: "environment",
        description: "Create and run new Node.js project",
        steps: [
            {
                command: "npm init -y",
                description: "Create package.json"
            },
            {
                command: "npm install package_name",
                description: "Install package"
            },
            {
                command: "node index.js",
                description: "Run application"
            }
        ]
    },

    // Git Repository Management
    {
        title: "Initialize Git Repository",
        language: "git",
        category: "version-control",
        description: "Start new repository and first commit",
        steps: [
            {
                command: "git init",
                description: "Initialize repository"
            },
            {
                command: "git add .",
                description: "Stage all files"
            },
            {
                command: "git commit -m 'Initial commit'",
                description: "Create first commit"
            }
        ]
    },

    // Docker Container Management
    {
        title: "Basic Docker Workflow",
        language: "docker",
        category: "containers",
        description: "Build and run Docker containers",
        steps: [
            {
                command: "docker build -t myapp .",
                description: "Build image"
            },
            {
                command: "docker run -p 4000:80 myapp",
                description: "Run container"
            },
            {
                command: "docker ps",
                description: "List running containers"
            }
        ]
    }
    // Add 1000+ more strictly grouped workflows...
];