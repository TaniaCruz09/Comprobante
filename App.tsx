import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Client } from "./models/Client";
import { Journal } from "./models/Journal";
import { JournalLine } from "./models/JournalLine";

export default function App() {
  const client = new Client("Juan", "Perez");
  const journal = new Journal(new Date(), client, "Venta de computadora");

  journal.addLine({
    code: "110505",
    account: "Caja",
    amount: 2200,
    operation: "D",
  });

  journal.addLine({
    code: "110506",
    account: "Caja",
    amount: 2222,
    operation: "C",
  });

  journal.addLine({
    code: "110507",
    account: "Caja",
    amount: 1234,
    operation: "D",
  });

  journal.addLine({
    code: "110508",
    account: "Caja",
    amount: 1500,
    operation: "C",
  });

  console.log(client);
  console.log(journal);
  console.log(" Total Debit:::::", journal.getTotalDebit());
  console.log(" Total Credit:::::", journal.getTotalCredit());
  console.log("Los totales son iguales?: ", journal.validateTotalsAreEquals());

  console.log("-------------Solucion a la asignacion---------------");
  //se muestran las lineas originales
  console.log("Lineas existentes: ", journal.lines);

  // llamo al metodo deleteLine creado en la clase Journal y le paso como argumento la linea que deseo eliminar
  //ejemplo 1: eliminando linea 2
  console.log("Despues de la eliminacion: ", journal.deleteLine(2));

  // console.log("Despues de la eliminacion: ", journal.deleteLine(1));
  // console.log("Despues de la eliminacion: ", journal.deleteLine(3));
  // console.log("Despues de la eliminacion: ", journal.deleteLine(4));

  return (
    <View style={styles.container}>
      <Text>My name is Tania!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    alignItems: "center",
    justifyContent: "center",
  },
});
