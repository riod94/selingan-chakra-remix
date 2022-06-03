import SimpleThreeColumns from "~/components/Feature/SimpleThreeColumns";
import TwoColumnWithLeftImage from "~/components/Feature/TwoColumnWithLeftImage";
import TwoColumnWithRightImage from "~/components/Feature/TwoColumnWithRightImage";
import Hero from "~/components/Hero";
import { MotionBox } from "~/components/MotionBox";
import Header from "~/components/Header";
import GuestNavbar from "~/components/Navbars/GuestNavbar";
import { AppLayout } from "~/layouts/AppLayout";
import Testimonials from "~/components/Testimonials";

export default function Index() {
  return (
    <AppLayout>
      <Hero />
      <SimpleThreeColumns />
      <TwoColumnWithLeftImage />
      <TwoColumnWithRightImage />
      <Testimonials />
      {/* <MotionBox
        height="10px"
        bg="brand.300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "ease-in-out", duration: "1.4"}}
        animate={{ scale: 0.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      /> */}
    </AppLayout>
  );
}
