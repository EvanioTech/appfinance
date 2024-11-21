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
    return(
        <Container bg={labelName.color}>
            <Label> {labelName.label} </Label>
            <Balance> R$ {data.saldo}</Balance>
        </Container>
    )
}

export {BalanceItem}