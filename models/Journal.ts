import { Client } from "./Client";
import { JournalLine } from "./JournalLine";
import * as yup from "yup";

interface JournalDTO {
  code: string;
  account: string;
  amount: number;
  operation: string;
}

class Journal {
  date: Date;
  client: Client;
  concept: string;
  lines: JournalLine[];

  constructor(date: Date, client: Client, concept: string) {
    this.date = date;
    this.client = client;
    this.concept = concept;
    this.lines = [];
  }

  getTotalDebit(): number {
    return this.lines.reduce((acc, line) => acc + line.debit, 0);
  }

  getTotalCredit(): number {
    return this.lines.reduce((acc, line) => acc + line.credit, 0);
  }

  validateTotalsAreEquals(): boolean {
    return this.getTotalCredit() === this.getTotalDebit();
  }

  addLine(journalDto: JournalDTO) {
    let schema = yup.object().shape({
      code: yup.string().required(),
      account: yup.string().required(),
      amount: yup.number().required(),
      operation: yup.string().max(1).required(),
    });

    const validatedData = schema.validateSync(journalDto);

    if (journalDto.operation === "C") {
      this.lines.push(
        new JournalLine(
          validatedData.code,
          validatedData.account,
          0,
          validatedData.amount,
          this
        )
      );
    } else {
      this.lines.push(
        new JournalLine(
          validatedData.code,
          validatedData.account,
          validatedData.amount,
          0,
          this
        )
      );
    }
  }

  //Creando la funcion deleteLine la cual se encargara de eliminar la linea que le pasemos como parametro
  deleteLine(cont: number): JournalLine[] {
    const newArray = this.lines.map((value: JournalLine) => value);

    if (cont === 1) {
      newArray.splice(0, 1);
    } else if (cont === 2) {
      newArray.splice(1, 1);
    } else if (cont === 3) {
      newArray.splice(2, 1);
    } else if (cont === 4) {
      newArray.splice(3, 3);
    }

    return newArray;
  }
}

export { Journal };
