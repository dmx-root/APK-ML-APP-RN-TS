const ROUTES = {
    HOME: 'Home',
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
    // ... otras rutas comunes a todos los perfiles
  };
  
  const ADMIN_ROUTES = {
    DASHBOARD: 'Dashboard',
    USERS: 'Users',
    // ... otras rutas específicas del perfil administrativo
  };
  
  const GUEST_ROUTES = {
    LOGIN: 'Login',
    REGISTER: 'Register',
    // ... otras rutas específicas del perfil de invitado
  };
  
  const SCREENS = {
    [ROUTES.HOME]:'./screens/HomeScreen',
    [ROUTES.PROFILE]: './screens/ProfileScreen',
    [ROUTES.SETTINGS]: './screens/SettingsScreen',
    [GUEST_ROUTES.LOGIN]: './screens/loginScreen',
    [GUEST_ROUTES.REGISTER]: './screens/registerScreen',
    [ADMIN_ROUTES.DASHBOARD]: './screens/dashboardScreen',
    [ADMIN_ROUTES.USERS]: './screens/usersScreen',
    // ... otras pantallas
  };
  
  const navigators = {
    common: {
      initialRoute: ROUTES.HOME,
      routes: ROUTES,
    },
    admin: {
      initialRoute: ADMIN_ROUTES.DASHBOARD,
      routes: ADMIN_ROUTES,
    },
    guest: {
      initialRoute: GUEST_ROUTES.LOGIN,
      routes: GUEST_ROUTES,
    },
    // Agrega más navegadores según sea necesario para otros perfiles
  };
  
  const { initialRoute, routes } = navigators['common'] || navigators.common;
  
  // console.log(routes)
  
//   Object.keys(routes).forEach((route) => (
//           console.log(SCREENS[routes[route]])
//         ))