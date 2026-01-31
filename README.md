# 📝 To-Do List Web Application

A clean, responsive, and feature-rich to-do list web application that allows users to manage their daily tasks efficiently. Built with vanilla HTML, CSS, and JavaScript with local storage support.

## ✨ Features

- **Add New Tasks**: Easily add new tasks to your list
- **Edit Tasks**: Modify existing tasks with a simple prompt
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: Tasks are saved in browser's local storage
- **Responsive Design**: Works well on both desktop and mobile devices
- **Modern UI**: Beautiful gradient background with clean task cards
- **Intuitive Interface**: Simple and user-friendly design

## 📁 Project Structure

```
todo-list-app/
├── index.html          # Main HTML file
├── style.css           # Styling for the application
├── app.js              # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: For application structure
- **CSS3**: For styling with modern gradients and responsive design
- **JavaScript (ES6)**: For application logic and DOM manipulation
- **Local Storage API**: For data persistence
- **Live Server Extension**: For local development (optional)

## 📖 How to Use

### Adding a Task
1. Type your task in the input field
2. Click the "Add" button or press Enter
3. Your task will appear in the list below

### Editing a Task
1. Click the "Edit" button next to any task
2. Modify the task text in the prompt window
3. Click OK to save changes

### Deleting a Task
1. Click the "Delete" button next to any task
2. The task will be immediately removed

## 🔧 Installation & Setup

### Local Development
1. **Clone or Download** the project files
2. **Open** the project folder in your code editor
3. **Run** the application using one of these methods:

#### Method 1: Using Live Server (Recommended)
1. Install the Live Server extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"
3. The app will open in your default browser at `http://localhost:5501`

#### Method 2: Direct Browser Opening
1. Simply double-click the `index.html` file to open it in your browser
2. Note: Some browsers may restrict local storage functionality with this method

#### Method 3: Using Python HTTP Server
```bash
# Navigate to the project folder
cd /path/to/todo-list-app

# Start a simple HTTP server
python -m http.server 8000

# Open browser and navigate to:
# http://localhost:8000
```

## 💾 Data Persistence

This application uses the browser's Local Storage API to save your tasks. This means:
- Tasks persist between browser sessions
- Tasks are saved per browser/device
- No data is sent to any external server

## 🎨 Customization

You can easily customize the application:

### Changing Colors
Edit the gradient in `style.css`:
```css
body {
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### Modifying Task Colors
Edit the button colors in `style.css`:
```css
.edit { background: #YOUR_EDIT_COLOR; }
.delete { background: #YOUR_DELETE_COLOR; }
```

## 🐛 Troubleshooting

### Common Issues

1. **Tasks not saving**: 
   - Make sure you're running the app through a web server (not `file://`)
   - Check browser settings for local storage permissions

2. **Buttons not working**:
   - Check browser console for JavaScript errors (F12 → Console)
   - Ensure all files are in the same directory

3. **Styling issues**:
   - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
   - Check CSS file path in HTML

## 🔮 Future Enhancements

Potential features to add:
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Dark/light mode toggle
- [ ] Task completion with strikethrough
- [ ] Drag and drop reordering
- [ ] Data export/import functionality
- [ ] Search and filter tasks

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

Rania Asghar

## 🙏 Acknowledgments

- Inspired by various to-do list applications
- Gradient colors from Tailwind CSS palette
- Thanks to all contributors and testers

---

**
