import React, {useMemo} from "react";
import { Container, Label, Balance } from "./styles";


const BalanceItem = ({data}) => {
    const labelName = useMemo(() => {
        if(data.tag === 'saldo') {
            return{
                label: 'saldo Atual',
                color: '3259df'
            }
        }else if (data.tag === 'receita'){
            return{
                label: 'Entradas de hoje',
                color: '71e249'
            }
        }else{
            return{
                label: 'Saidas de hoje',
                color: 'e04d3a'
            }
        }

    }, [data])

     // Formatar o valor de saldo com 2 casas decimais e separadores de milhar
  const formattedBalance = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(data.saldo);

    return(
        <Container bg={labelName.color}>
            <Label> {labelName.label} </Label>
            <Balance>{formattedBalance}</Balance>
        </Container>
    )
}

export {BalanceItem}