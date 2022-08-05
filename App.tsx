import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [fecha, setFecha] = useState("2022-07-29");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [concepto, setConcepto] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [debito, setDebito] = useState("");
  const [credito, setCredito] = useState("");

  const saveDate = (text: string) => {
    //Validar que sea una fecha de verdad
    if (text.length >= 10 && text !== "2022-07-29") {
      alert("Erorr");
      return;
    }

    if (text.length >= 10) {
      setFecha(text);
      // console.log(fecha);
    }
  };

  const saveName = (text: string) => {
    setNombre(text);
    console.log(nombre);
  };

  const saveApellido = (text: string) => {
    setApellido(text);
    console.log(apellido);
  };

  const saveConcepto = (text: string) => {
    setConcepto(text);
    console.log(concepto);
  };

  const saveCodigo = (text: string) => {
    setCodigo(text);
    console.log(codigo);
  };
  const saveCuenta = (text: string) => {
    setCuenta(text);
    console.log(cuenta);
  };

  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };
  const saveDebito = (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };
  const saveCredito = (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  const saveJournal = () => {
    // console.log(fecha);
    // console.log(nombre);
    // console.log(apellido);
    // console.log(concepto);
    // console.log(codigo);
    // console.log(cuenta);
    // console.log(debito);
    // console.log(credito);

    alert("hola");
  };

  return (
    <View>
      <Text>APP Journal</Text>

      <Text>Fecha:</Text>
      <TextInput placeholder="Fecha" onChangeText={(text) => saveDate(text)} />

      <Text>Nombre:</Text>
      <TextInput placeholder="Nombre" onChangeText={(text) => saveName(text)} />

      <Text>Apellido:</Text>
      <TextInput
        placeholder="Apellido"
        onChangeText={(text) => saveApellido(text)}
      />

      <Text>Concepto:</Text>
      <TextInput
        placeholder="Concepto"
        onChangeText={(text) => saveConcepto(text)}
      />

      <View>
        <Text>Codigo:</Text>
        <TextInput
          placeholder="Codigo"
          onChangeText={(text) => saveCodigo(text)}
        />

        <Text>Cuenta:</Text>
        <TextInput
          placeholder="Cuenta"
          onChangeText={(text) => saveCuenta(text)}
        />

        <Text>Debito:</Text>
        <TextInput
          placeholder="Debito"
          onChangeText={(text) => saveDebito(text)}
        />

        <Text>Credito</Text>
        <TextInput
          placeholder="Credito"
          onChangeText={(text) => saveCredito(text)}
        />

        <Button title="Guardar" onPress={() => saveJournal()} />
      </View>
    </View>
  );
}

// import { Client } from "./models/Client";
// import { Journal } from "./models/Journal";
// import { JournalLine } from "./models/JournalLine";

// export default function App() {
//   const client = new Client("Juan", "Perez");
//   const journal = new Journal(new Date(), client, "Venta de computadora");

//   journal.addLine({
//     code: "110505",
//     account: "Caja",
//     amount: 2200,
//     operation: "D",
//   });

//   journal.addLine({
//     code: "110506",
//     account: "Caja",
//     amount: 2222,
//     operation: "C",
//   });

//   journal.addLine({
//     code: "110507",
//     account: "Caja",
//     amount: 1234,
//     operation: "D",
//   });

//   journal.addLine({
//     code: "110508",
//     account: "Caja",
//     amount: 1500,
//     operation: "C",
//   });

//   console.log(client);
//   console.log(journal);
//   console.log(" Total Debit:::::", journal.getTotalDebit());
//   console.log(" Total Credit:::::", journal.getTotalCredit());
//   console.log("Los totales son iguales?: ", journal.validateTotalsAreEquals());

//   console.log("-------------Solucion a la asignacion---------------");
//   //se muestran las lineas originales
//   console.log("Lineas existentes: ", journal.lines);

//   // llamo al metodo deleteLine creado en la clase Journal y le paso como argumento la linea que deseo eliminar
//   //ejemplo 1: eliminando linea 2
//   console.log("Despues de la eliminacion: ", journal.deleteLine(2));

//   console.log("Despues de la eliminacion: ", journal.deleteLine(1));
//   console.log("Despues de la eliminacion: ", journal.deleteLine(3));
//   console.log("Despues de la eliminacion: ", journal.deleteLine(4));

//   return (
//     <View style={styles.container}>
//       <Text>My name is Tania!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#dedede",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
