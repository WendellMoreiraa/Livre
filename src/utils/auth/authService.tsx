const loginUser = {
  email: "usuario@exemplo.com",
  password: "senha123",
};

const AuthProvider = () => {
  const login = (email: string, password: string) => {
    if (email === loginUser.email && password === loginUser.password) {
      localStorage.setItem("token", "fakeToken");
      console.log("recebeu");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, logout };
};

export default AuthProvider;
