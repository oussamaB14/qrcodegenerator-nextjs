import Seo from '@/components/common/utils/seo';
import { ICommon } from '@/typings/typings';
import type { NextPage } from 'next';

const Home: NextPage<{ seo: ICommon['seo'] }> = () => {
  // Ceci est à supprimer
  const seo = {
    metaTitle: 'Accueil - NOM DU SITE',
    metaDescription: 'Accueil',
  };
  return (
    <main>
      <Seo seo={seo} />
      Text
    </main>
  );
};

export default Home;
