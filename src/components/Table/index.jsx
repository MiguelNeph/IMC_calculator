import './Table.modulo.css'

const IMCTable = ({height, weight}) => {
    const imc = calculateIMC(height, weight);
    const clasification = getClasification(imc);
    const calculateIMC = (height, weight)=>{
        const heightCM = height / 100;
        const imc = weight / (heightCM * heightCM);
        return imc;
    }
    const getClasification = (imc) => {
        if(imc < 18.5){
            return 'Underweight';
        }else if (imc >= 18.5 && imc <=24.9){
            return 'normal weight'
        }else if (imc >= 25 && imc<=29.9){
            return 'overweight'
        }else {
            return 'weight'
        }  

    }

    return (
        <table>
            <thead>
            <tr>
                <th>IMC</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            <tr className={userPosition === 'underweight' ? 'underweight' : ''}>
                <td>Under 18.5</td>
                <td>Under weight</td>
            </tr>
            <tr className={userPosition === 'normalweight' ? 'normal' : ''}>
                <td>18.5 - 24.9</td>
                <td>Normal weight</td>
            </tr>
            <tr className={userPosition === 'overweight' ? 'overweight' : ''}>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
            </tr>
            <tr className={userPosition === 'obese' ? 'obese' : ''}>
                <td>30.0 o más</td>
                <td>Obesity</td>
            </tr>
            </tbody>
        </table>
        );
    };


    
export default IMCTable;