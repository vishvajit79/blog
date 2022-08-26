import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Vishvajit</GradientText> 👋
        </>
      }
      description={
        <>
          Currently living in <span className="text-yellow-400">Toronto</span>.
          I'm into outdoor adventures of all sorts -{' '}
          <span className="text-cyan-400 hover:underline">Camping</span>,{' '}
          <span className="text-red-400 hover:underline">
            Canoeing - Kayaking
          </span>
          ,{' '}
          <span className="text-purple-400 hover:underline">
            Mountain Biking
          </span>{' '}
          and <span className="text-green-400 hover:underline">Hiking</span>. I
          like to make entertaining, informative, and concise adventure videos
          with dribbles of humor. I don't pretend to know it all, I'm learning a
          ton as I go, but I have{' '}
          <span className="text-gray-400 hover:underline">little</span> fear of
          failure so come join me on this journey of outdoor fun and discovery{' '}
          <span className="text-red-400 hover:underline">:)</span> <br></br>
          <a className="text-orange-400 hover:underline" href="/">
            #WeDesiBoy
          </a>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.youtube.com/channel/UCkMWEPJv5bYw4bP_a83xBug?sub_confirmation=1">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a href="https://www.instagram.com/vishvajit79/">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/vishvajit79/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
