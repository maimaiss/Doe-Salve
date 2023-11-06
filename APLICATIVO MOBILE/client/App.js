import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { PaginaInicial } from "./src/pages/PagInicial";
import { Login } from "./src/pages/Login";
import { Cadastro } from "./src/pages/Cadastro";
import { Home } from "./src/pages/Home";
import { Doar } from "./src/pages/Doar";
import { Comunidade } from "./src/pages/Comunidade";
import { MinhasDoações } from "./src/pages/MinhasDoações";
import { Opções } from "./src/pages/Opções";
import { OqFazer } from "./src/pages/OqFazer";
import { ClinicaA } from "./src/pages/Doar2";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pagina inicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="pagina inicial" component={PaginaInicial} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="doar" component={Doar} />
        <Stack.Screen name="clinicaA" component={ClinicaA} />
        <Stack.Screen name="comunidade" component={Comunidade} />
        <Stack.Screen name="minhasDoações" component={MinhasDoações} />
        <Stack.Screen name="opções" component={Opções} />
        <Stack.Screen name="oqfazer" component={OqFazer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
