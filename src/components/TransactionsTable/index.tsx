import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api("/transactions").then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Valor</th>
            <th>categories</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salario</td>
            <td className="deposit">R$1.000,00</td>
            <td>tabalho</td>
            <td>05/10/2021</td>
          </tr>
          <tr>
            <td>alugue</td>
            <td className="withdraw">R$-500,00</td>
            <td>tabalho</td>
            <td>05/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
