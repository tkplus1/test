import { useState } from 'react';
import React from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';


import { supabase } from '../client';

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function signIn() {
        if (!email) return
        const { error, data } = await supabase.auth.signIn({
            email
        })
        if (error) { 
            console.log({ error })
        } else { 
            setSubmitted(true)
        }
    }
    if (submitted) { 
        return (
            <div>
                <h1>Please check your email</h1>
            </div>
        )
    }


return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Create a new account, or sign in
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput onChange={e => setEmail(e.target.value)} label="Email" placeholder="you@you.com" required />
        <Button onClick={() => signIn()} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}



