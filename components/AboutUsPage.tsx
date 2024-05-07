import Link from "next/link";

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          We're more than trainers – we're your partners in unleashing your dog's brilliance. Established in 2013, 9ja K9 has guided countless dog owners to achieve remarkable transformations and forge unbreakable bonds.
        </p>
        <p className="text-lg mb-8">
          9ja K9 is a society of dog trainers and dog owners. Our mission is to provide trainers and dog owners with valuable information that they need to successfully raise and train a puppy or an adult dog.
        </p>
        <p className="text-lg mb-8">
          We offer a range of Training programs from dog obedience to dealing with behavioral issues and reactivity such as uncontrolled dog aggression. It is our hope to enlighten society and dog owners on how to treat dogs to make the human and dog world a better and safer place with the orientation of "Control means accepting responsibility." Hence, having a well trained and perfectly behaved canine companion even as protection dogs in the society is a dream come true, We believe not for the academy alone but also for the society at large.
        </p>
        <p className="text-lg mb-8">
          Integrity and client satisfaction has always been our top priority to making a good image for the company which is what we envisage to achieve via our specialization in canine training services and interactions, this has enabled us come up with a system known as (CPEF) Canine Performance Evaluation Form with video updates and this is a biweekly evaluation system which informs us on the level of canine developmental training attained to enable the company and clients, fast track their dog's performance to curtail dissatisfaction, giving room for behavioral improvements and corrections.
        </p>
        <h2 className="text-2xl font-bold mb-4">Embark on the Journey</h2>
        <p className="text-lg mb-8">
          Uncover your dog's extraordinary potential. Secure your spot now for a journey of growth, harmony, and endless tail-wags.
        </p>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-2">Phone: +2348064061896</p>
        <p className="text-lg mb-2">Email: info@9jak9.com</p>
        <p className="text-lg mb-8">Location: 31 I. Gumel Rd, Ibadan</p>
        <Link href="#">
          <p className="text-lg text-blue-500 hover:underline">Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;
