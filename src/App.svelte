<script>
    /* Google authentication implementation */
    import { auth, googleProvider } from './firebase' 
    import { authState } from 'rxfire/auth'

    let user; 

    const unsubscribe = authState(auth).subscribe(usr => user = usr)

    function login () {
        auth.signInWithPopup(googleProvider)
    }

    function logout () {
        auth.signOut()
    }
</script>

<div />

<style>
</style>
