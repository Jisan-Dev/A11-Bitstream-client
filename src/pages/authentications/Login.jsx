import signUp from '../../assets/illustration.svg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const googleSignIn = async () => {
    const { result } = await signInWithGoogle();
    console.log(result);
    alert('signedIn');
  };

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center font-gsans max-sm:px-3 pb-14 max-sm:py-5 max-sm:flex-col overflow-x-hidden ">
        <Card className="mx-auto max-w-lg sm:w-96">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button onClick={googleSignIn} variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        <div data-aos="fade-left" data-aos-duration="1000" className=" w-1/2 max-sm:w-full max-sm:mt-2">
          <img src={signUp} className="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
