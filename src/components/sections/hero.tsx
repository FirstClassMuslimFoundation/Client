
// import { FadeIn } from "../uis/FadeIn";
// import { Container } from '@/components/Container';
// import EmbeddedForm from "./iform";

// export const Hero = () => {
//     return (
//         <div>
//             <Container className="mt-24 sm:mt-32 md:mt-56">
//                 <FadeIn className="max-w-3xl">
//                     <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
//                         M-First Series, By The First Class Muslim Foundation
//                     </h1>
//                     <p className="mt-6 text-xl text-purple-600 text-balance">
//                         {/* We are the community of Muslim Students across 21 Higher Institutions in Lagos State. */}
//                         A Path to career excellence for excellent students in an Islamic sphere,
//                     </p>
//                 </FadeIn>
//                 <div className="overflow-y-auto">
//                     <EmbeddedForm />
//                 </div>
//             </Container>
//         </div>
//     )
// }

import { FadeIn } from "../uis/FadeIn";
import { Container } from '@/components/Container';
import EmbeddedForm from "./iform";

export const Hero = () => {
    return (
        <div className="hero-container">
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-purple-600 font-semibold tracking-tight text-purple-950 text-balance sm:text-7xl">
                        M-First Series, By The First Class Muslim Foundation
                    </h1>
                    <p className="mt-6 text-xl text-purple-600 text-balance">
                        A Path to career excellence for excellent students in an Islamic sphere,
                    </p>
                </FadeIn>
            </Container>
            <div className="overflow-y-auto mt-8 mb-96">
                <EmbeddedForm />
            </div>
        </div>
    );
};
