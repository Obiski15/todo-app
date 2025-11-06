# Todo App

A Todo application built with React Native, Expo, and Convex. This app features a modern UI with dark mode support, real-time data synchronization, and runs on iOS, Android, and Web.

## 🚀 Features

- ✅ Create, read, update, and delete todos
- 🎨 Dark and light theme support with system preference detection
- 📱 Cross-platform support (iOS, Android, Web)
- 🔄 Real-time data synchronization with Convex backend
- 🎯 Filter todos by status (All, Active, Completed)
- 💾 Persistent theme preferences using AsyncStorage

## 🛠️ Tech Stack

### Core

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and tooling
- **TypeScript** - Type-safe development

### Backend & State Management

- **Convex** - Real-time backend-as-a-service
  - Query-based data fetching
  - Mutations for data updates
  - Real-time subscriptions

## 📁 Project Structure

```
├── app/                      # Expo Router pages
│   ├── _layout.tsx          # Root layout with providers
│   ├── index.tsx            # Home screen
│   └── global.css           # Global styles
├── components/
│   ├── todo/                # Todo-specific components
│   │   ├── create-todo.tsx  # Todo creation form
│   │   ├── Todo.tsx         # Individual todo item
│   │   └── Todos.tsx        # Todo list with filters
│   ├── ui/                  # Reusable UI components
│   │   └── Radio.tsx        # Custom radio button
│   ├── header.tsx           # App header
│   ├── footer.tsx           # App footer
│   └── theme-toggle.tsx     # Theme switcher
├── contexts/
│   ├── theme-context.tsx    # Theme state management
│   └── todo-context.tsx     # Todo state management
├── convex/                  # Convex backend
│   ├── schema.ts            # Database schema
│   └── todos.ts             # Todo queries & mutations
├── lib/
│   └── utils.ts             # Utility functions
└── assets/                  # Images, fonts, etc.
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android)
- Convex account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up Convex**

   ```bash
   npx convex dev
   ```

   This will:
   - Create a new Convex project (if needed)
   - Generate your Convex URL
   - Start the Convex dev server

4. **Create environment file**

   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_CONVEX_URL=<your-convex-url>
   ```

5. **Start the development server**
   ```bash
   pnpm start
   ```

### Running on Different Platforms

- **iOS**: Press `i` in the terminal or run `pnpm ios`
- **Android**: Press `a` in the terminal or run `pnpm android`
- **Web**: Press `w` in the terminal or run `pnpm web`

## 🔧 Available Scripts

- `pnpm start` - Start Expo development server
- `pnpm android` - Run on Android device/emulator
- `pnpm ios` - Run on iOS device/simulator
- `pnpm web` - Run in web browser
- `pnpm lint` - Run ESLint

## 🗄️ Database Schema

The Convex database uses a simple schema with a single `todos` table:

```typescript
{
  todos: {
    todo: string,      // Todo text content
    status: string     // "active" | "completed"
  }
}
```

### Available Queries

- `getTodos({ status?: string })` - Fetch todos filtered by status

### Available Mutations

- `addTodo({ todo: string, status?: string })` - Create new todo
- `updateTodo({ id, status?, todo? })` - Update existing todo
- `deleteTodo({ id })` - Delete a todo
- `clearTodos({ status })` - Delete all todos with given status

## 🎨 Theming

The app supports three theme modes:

- **Light**: Bright, clean interface
- **Dark**: Easy on the eyes in low-light
- **System**: Automatically matches device preference

Theme preference is persisted using AsyncStorage and survives app restarts.

### Customizing Theme

Edit `app/global.css` and `tailwind.config.js` to customize colors and styles.

## 📱 Features Breakdown

### Todo Management

- **Create**: Type in the input field and press Enter/Return
- **Complete**: Click the radio button to toggle completion status
- **Edit**: Click on todo text to edit inline
- **Delete**: Click the X button to remove
- **Filter**: Use All/Active/Completed buttons to filter view
- **Clear Completed**: Remove all completed todos at once

### Responsive Design

- Mobile-first approach
- Adaptive layouts for tablets and desktop
- Optimized touch targets for accessibility
