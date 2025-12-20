# Chef Claude

A modern React application that generates creative recipes based on your available ingredients using OpenAI's GPT-4o-mini model. Simply enter your ingredients, and get a delicious recipe suggestion!

## Features

- **Ingredient-based Recipe Generation**: Input your available ingredients and get a custom recipe
- **AI-Powered**: Uses OpenAI's GPT-4o-mini for intelligent recipe creation
- **Responsive Design**: Clean, modern UI that works on all devices
- **Real-time Feedback**: Loading states and error handling for a smooth user experience
- **Markdown Rendering**: Beautifully formatted recipes with proper typography

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Markdown** - For rendering recipe content
- **CSS3** - Custom styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for API
- **OpenAI API** - For recipe generation
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Git**

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd chef-claude
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   > **Note:** Get your API key from [OpenAI's platform](https://platform.openai.com/api-keys)

## Running the Application

### Development Mode

1. **Start the backend server:**
   ```bash
   node server/index.js
   ```
   The server will run on `http://localhost:3001`

2. **Start the frontend (in a new terminal):**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Production Build

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   node server/index.js
   ```

## Usage

1. **Add Ingredients:** Type your available ingredients in the search box and press Enter or click "Add Ingredient"
2. **Generate Recipe:** Once you have at least 4 ingredients, click "Get a recipe" to generate a custom recipe
3. **View Recipe:** The AI-generated recipe will appear below with proper formatting

## Project Structure

```
chef-claude/
├── public/
│   └── img/          # Static images
├── server/
│   └── index.js      # Express server with OpenAI integration
├── src/
│   ├── assets/       # Static assets
│   ├── components/   # React components
│   │   ├── header.jsx    # App header
│   │   ├── indegredient.jsx  # Ingredient input and recipe generation
│   │   ├── mainc.jsx    # Main content component
│   │   └── recipe.jsx   # Recipe display component
│   ├── App.jsx       # Main App component
│   ├── index.css     # Global styles
│   └── main.jsx      # App entry point
├── .env              # Environment variables (not in repo)
├── .gitignore        # Git ignore rules
├── eslint.config.js  # ESLint configuration
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## API Endpoints

### POST /getRecipe
Generates a recipe based on provided ingredients.

**Request Body:**
```json
{
  "ingredients": ["ingredient1", "ingredient2", "ingredient3"]
}
```

**Response:**
```json
{
  "recipe": "# Recipe Title\n\n## Ingredients\n- Item 1\n- Item 2\n\n## Instructions\n1. Step 1\n2. Step 2"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the GPT-4o-mini model
- React and Vite communities for excellent documentation
- Inspired by the need for creative cooking solutions
