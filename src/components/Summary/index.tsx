import { Container } from "./styles";
import incomesImg from "../../assets/income.svg"
import outcomesImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomesImg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomesImg} alt="" />
        </header>
        <strong>R$-500,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}
