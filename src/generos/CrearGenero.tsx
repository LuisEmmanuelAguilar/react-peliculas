import { Link, useHistory } from "react-router-dom"
import Button from "../utils/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero() {

    //const history = useHistory();
    return (
        <>
            <h3>Crear Genero</h3>
            <Formik initialValues={{
                nombre: ''
            }}
                onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(values);
                }}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre"></FormGroupText>

                        <Button disabled={formikProps.isSubmitting}
                            type="submit">Salvar</Button>
                        <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                    </Form>
                )
                }
            </Formik>
        </>
    )
}