# 📦 pnpm Setup Guide for AuraMail AI

## What is pnpm?

pnpm is a fast, disk space efficient package manager that's up to 2x faster than npm and uses significantly less disk space through smart symlinking.

## 🔧 Installation Steps

### 1. Install pnpm Globally

Choose the method that works best for your system:

#### Windows PowerShell (Recommended)
```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

#### Using npm
```bash
npm install -g pnpm
```

#### Using Scoop
```bash
scoop install pnpm
```

#### Using Chocolatey
```bash
choco install pnpm
```

### 2. Verify Installation

```bash
pnpm --version
```

You should see a version number (e.g., 9.0.0 or higher).

## 📦 Install Project Dependencies

Navigate to the project directory and run:

```bash
cd "C:\Users\kamru\Documents\Code\aura-mail\Aura-Mail"
pnpm install
```

This will:
- Install all dependencies from package.json
- Create a `pnpm-lock.yaml` file
- Create a `node_modules` folder

## 🚀 Available Commands

### Development
```bash
pnpm dev          # Start development server (http://localhost:5173)
```

### Build
```bash
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Code Quality
```bash
pnpm lint         # Run ESLint
pnpm type-check   # Check TypeScript types without emitting files
```

## 📊 pnpm vs npm vs yarn

| Command | npm | yarn | pnpm |
|---------|-----|------|------|
| Install dependencies | `npm install` | `yarn` | `pnpm install` |
| Add package | `npm install pkg` | `yarn add pkg` | `pnpm add pkg` |
| Remove package | `npm uninstall pkg` | `yarn remove pkg` | `pnpm remove pkg` |
| Run script | `npm run dev` | `yarn dev` | `pnpm dev` |
| Global install | `npm install -g pkg` | `yarn global add pkg` | `pnpm add -g pkg` |

## 🎯 pnpm-Specific Features

### 1. Workspace Support
The project includes `pnpm-workspace.yaml` for monorepo support (future expansion).

### 2. Configuration
The `.npmrc` file configures pnpm behavior:
- `auto-install-peers=true` - Automatically install peer dependencies
- `strict-peer-dependencies=false` - Don't fail on peer dependency warnings
- `shamefully-hoist=true` - Hoist dependencies for better compatibility

### 3. Speed Benefits
- **Faster installs**: Up to 2x faster than npm
- **Disk space**: Saves gigabytes by using hard links
- **Strict**: Better dependency isolation

## 🔍 Common pnpm Commands

```bash
# Install a new dependency
pnpm add axios

# Install a dev dependency
pnpm add -D typescript

# Update dependencies
pnpm update

# Update a specific package
pnpm update react

# Remove a dependency
pnpm remove axios

# List installed packages
pnpm list

# Check for outdated packages
pnpm outdated

# Run any script from package.json
pnpm <script-name>
```

## 🐛 Troubleshooting

### Issue: "pnpm: command not found"

**Solution**: Close and reopen your terminal after installing pnpm, or add it to your PATH manually.

### Issue: Peer dependency warnings

**Solution**: These are usually safe to ignore. The `.npmrc` is configured to handle them automatically.

### Issue: Installation fails

**Solution**: 
1. Delete `node_modules` and `pnpm-lock.yaml`
2. Run `pnpm install` again
3. If still fails, try: `pnpm install --force`

### Issue: Port 5173 already in use

**Solution**: Kill the process using the port or use a different port:
```bash
pnpm dev --port 3000
```

## 📝 Project Configuration

### package.json
- Includes `"packageManager": "pnpm@9.0.0"` to specify pnpm version
- All scripts work with pnpm (no changes needed)

### .npmrc
- Configures pnpm behavior for this project
- Ensures compatibility with all dependencies

### .gitignore
- Includes `pnpm-lock.yaml` (optional - you can commit this if you want)
- Ignores `node_modules`

## ✅ Quick Start Checklist

- [ ] Install pnpm globally
- [ ] Verify pnpm is installed (`pnpm --version`)
- [ ] Navigate to project directory
- [ ] Run `pnpm install`
- [ ] Run `pnpm dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Start coding! 🎉

## 📚 Additional Resources

- [pnpm Official Docs](https://pnpm.io/)
- [pnpm CLI Commands](https://pnpm.io/cli/install)
- [Why pnpm?](https://pnpm.io/motivation)

---

**Ready to go!** Run `pnpm install` and then `pnpm dev` to start developing! 🚀

