import "passport"
import { AuthUser } from "../auth/auth.types";

// declaration file: provide own type information for a library or module
// Extend Express Request interface to include 'user' property
declare global {
  namespace Express {
    interface User extends AuthUser {}
  }
}

export {}; // treat as encapsulated module rather than script, if it's considered a script, it gets added to the global scope, avoid conflicts with other declaration files in global scope.