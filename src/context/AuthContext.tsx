import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  institution: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  authNotice: string | null;
  openAuthModal: (notice?: string, onAuthenticated?: () => void) => void;
  closeAuthModal: () => void;
  login: (email: string, role?: string) => void;
  logout: () => void;
  requireAuth: (action: () => void, notice?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('digsite_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const openAuthModal = (notice?: string, onAuthenticated?: () => void) => {
    if (notice) setAuthNotice(notice);
    else setAuthNotice('Please sign in or create an account to access this feature.');
    if (onAuthenticated) setPendingAction(() => onAuthenticated);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthNotice(null);
    setPendingAction(null);
  };

  const login = (email: string, role = 'Principal Investigator') => {
    const newUser: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      role,
      institution: 'Archaeological Institute',
    };
    setUser(newUser);
    try {
      localStorage.setItem('digsite_auth_user', JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
    setIsAuthModalOpen(false);
    setAuthNotice(null);

    if (pendingAction) {
      setTimeout(() => {
        pendingAction();
        setPendingAction(null);
      }, 300);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('digsite_auth_user');
    } catch (e) {
      console.error(e);
    }
  };

  const requireAuth = (action: () => void, notice?: string) => {
    if (user) {
      action();
    } else {
      openAuthModal(notice || 'Signup/Login is required to get started and generate reports.', action);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authNotice,
        openAuthModal,
        closeAuthModal,
        login,
        logout,
        requireAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
