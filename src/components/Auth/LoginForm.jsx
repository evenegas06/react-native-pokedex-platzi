import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Keyboard,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { userDB, userDetailsDB } from '../../utils/userDB';

const LoginForm = () => {
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('El usuario es obligatorio'),
            password: Yup.string().required('La contraseña es obligatoria'),
        }),
        validateOnChange: false, // La validación solo se ejecutará al enviar el formulario...
        onSubmit: (values) => {
            // console.log('Formulario enviado...');
            // console.log(values);
            //const  { username, password } = values;

            setError('');

            if (values.username !== userDB.username || values.password !== userDB.password) {
                setError('El usuario o la contraseña no son correctos...');
            } else {
                console.log('Login correcto');
                console.log(userDetailsDB);
            }

        },
    });

    return (
        <View>
            <Text style={ styles.title }>Iniciar sesión</Text>
            <TextInput 
                placeholder='Nombre de usuario'
                style={ styles.input }
                autoCapitalize='none'
                value={ formik.values.username }
                onChangeText={
                    (text) => formik.setFieldValue('username', text)
                }
            />
            <TextInput
                placeholder='Contraseña'
                style={ styles.input }
                autoCapitalize='none'
                secureTextEntry={ true }
                value={ formik.values.password }
                onChangeText={
                    (text) => formik.setFieldValue('password', text)
                }
            />
            <Button 
                title='Entrar'
                onPress={ formik.handleSubmit }
            />
            <Text style={ styles.error }>{ formik.errors.username }</Text>
            <Text style={ styles.error }>{ formik.errors.password }</Text>
            <Text style={ styles.error }>{ error }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    }
});

export default LoginForm;