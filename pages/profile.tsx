import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function Profile() {
    const [profile, setProfile] = useState(null)
    const router = useRouter()

    useEffect(() => {
    fetchProfile()
}, [])

async function fetchProfile() { 
const profileData = await supabase.auth.user()
if (!profileData) {
    router.push('/sign-in')
} else {
setProfile(profileData)
    }
}
 async function signOut() {
     await supabase.auth.signOut()
     router.push('/sign-in')
 }
    if (!profile) return null
    return (
        <div>
            <h2>Hey, {profile.email}</h2>
            <p>User ID: {profile.id}</p>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}