import tw from "tailwind-styled-components";

const Container = tw.section` relative h-2/4 w-[45rem] font-[spantaran] py-10 `;
const HeaderText = tw.h1`text-[5rem] `;

const Hero = () => {
  return (
    <>
      <Container>
        <main>
          <HeaderText className="text-left">COLLECT</HeaderText>
          <div className="flex justify-center text-center ">
            <div className="bg-[url('/static/striped-hero-text.svg')] -rotate-3 w-[600px]">
              <HeaderText className="text-black rotate-3">NEW NFTs</HeaderText>
            </div>
          </div>
          <HeaderText className="text-right">FOR YOU</HeaderText>
        </main>
      </Container>
      <img className="absolute left-0 bottom-56" src="/static/vector-mid.png" alt="" />
      <img className="absolute bottom-44 -left-[20rem] w-[33rem]" src="/static/dino-left.png" alt="" />
    </>
  );
};

export default Hero;
