import signUp from '../../assets/signuppage.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string().email(),
  photo: z.string().optional(),
  password: z
    .string()
    .min(6)
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
      message: 'Password must contain at least one uppercase letter and one lowercase letter and a number',
    }),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile } = useContext(AuthContext);

  const googleSignIn = async () => {
    const { user } = await signInWithGoogle();
    console.log('result', user);
    // alert('signedIn');
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitHandler = async (data) => {
    try {
      const { user } = await createUser(data.email, data.password);
      await updateUserProfile(data.name, data.photo);
      console.log('result', user);
      // alert('signedIn');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center font-gsans max-sm:px-3 pb-14 max-sm:py-5 max-sm:flex-col overflow-x-hidden ">
        <Card className="mx-auto max-w-lg sm:w-96">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="name" {...register('name')} placeholder="m@example.com" required />
                  {errors.name && <div className="text-red-500 text-sm">{errors.name.message}</div>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="photo-url">Photo Url</Label>
                  <Input id="photo-url" type="url" {...register('photo')} required />
                  {errors.photo && <div className="text-red-500 text-sm">{errors.photo.message}</div>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email')} placeholder="m@example.com" required />
                  {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" {...register('password')} required />
                  {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
                <Button onClick={googleSignIn} variant="outline" className="w-full">
                  Sign up with Google
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline">
                Login
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

export default SignUp;
