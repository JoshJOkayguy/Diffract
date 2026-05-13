# Diffract - A minimal API diff viewer

Diffract offers a simple way to test different versions of an API and compare the responses with a simple GitHub-style diff view. It helps developers quickly identify changes in JSON responses across different environments or versions.

## 🚀 Features

- **Side-by-Side Requests**: Configure two independent API requests with custom methods, URLs, and JSON bodies.
- **Visual Diff**: See exactly what was added, removed, or changed between two API responses.
- **Built-in Proxy**: A dedicated proxy server to bypass CORS restrictions when testing external APIs.
- **Modern UI**: Clean, responsive interface built with Tailwind CSS and CodeMirror for JSON input.

## 🛠️ Tech Stack

- **Frontend**: Vite, React, Tailwind CSS
- **Editor**: CodeMirror (with JSON syntax highlighting)
- **Diffing**: jsondiffpatch
- **Proxy Server**: Node.js, Express, Axios
- **Icons**: Lucide React

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/diffract.git
   cd diffract
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🧪 Testing

Diffract uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

To run the test suite:
```bash
npm test
```

### Running the Project

To use Diffract, you need to run both the frontend development server and the proxy server.

1. **Start the Proxy Server** (Required for API requests):
   ```bash
   npm run proxy
   ```
   The proxy will run on `http://localhost:3001`.

2. **Start the Frontend**:
   In a new terminal window, run:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📖 Usage

1. **Configure Request A**: Set the method (GET/POST), URL, and JSON body (if applicable).
2. **Configure Request B**: Set the parameters for the second request you want to compare.
3. **Send**: Click the "Send" button for each request.
4. **Compare**: The "DIFF OUTPUT" section will automatically update to show the differences between the two responses.
5. **Reset**: Use the "+ New" button in the header to clear all fields.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
© 2026 Brayden Simoneau
