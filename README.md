<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Beginner Level Pracrice</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 20px;
      padding: 20px;
      background-color: #f8f8f8;
    }

    h1 {
      color: #333;
    }

    p {
      color: #555;
    }

    code {
      background-color: #f0f0f0;
      padding: 2px 4px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div id="app"></div>
    const App = () => (
      <div>
        <h1>This is My Beginner Level Practice</h1>
        <p>Welcome to the documentation for my initial level Frontend Development training based course! This repository does something learning based solves a particular problem.</p>

        <h2>Getting Started</h2>
        <p>Follow these steps to get started with the project:</p>
        <code>
          git clone https://github.com/your-username/your-repo.git<br/>
          cd your-repo<br/>
          npm install<br/>
          npm start
        </code>

        <h2>Learning Languages</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java Script</li>
          <li>React JS</li>
        </ul>

        <h2>Contributing</h2>
        <p>If you would like to contribute, follow these steps:</p>
        <code>
          1. Fork the repository<br/>
          2. Create a new branch: <code>git checkout -b feature/new-feature</code><br/>
          3. Make your changes and commit: <code>git commit -m 'Add new feature'</code><br/>
          4. Push to the branch: <code>git push origin feature/new-feature</code><br/>
          5. Submit a pull request
        </code>

        <h2>License</h2>
        <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
      </div>
    );

    ReactDOM.render(<App />, document.getElementById('app'));
  </script>
</body>
</html>
