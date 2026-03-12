import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐ Client Feedback Highlighting"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((test, index) => (
            <GlowCard index={index} key={test.name} card={test}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={test.imgPath} alt={test.name} />
                </div>

                <div>
                  <p className="font-bold">{test.name}</p>
                  <p className="text-white-50">{test.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
