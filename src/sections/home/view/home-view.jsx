import Container from '@mui/material/Container';
// import { sellingArr } from 'src/_mock/Home';
import HeaderCell from 'src/components/heading-bar/heading';
import { Box } from '@mui/material';
import HeroSlider from '../hero-section';

import SellingStore from '../best-selling';
// import SponsoredStore from '../sponsored-store';
import About from '../about';
import NewArticles from '../new-articles';


// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <Box sx={{ mt: 5 }}>
      <Container>
        <HeroSlider />
      <Box sx={{ mt: 10 }} >
            <HeaderCell heading="عن شركتنا" />
          </Box>
          <About />
      </Container>
      
      <Box position="relative">
        <Container>
          <Box sx={{ mt: 10 }} id="best-selling">
            <HeaderCell heading="الأكثر مبيعا" />
          </Box>
          <SellingStore />
        </Container>
      </Box>

      <Box position="relative">
        <Container>
          <Box sx={{ mt: 6 }} id="about-us">
            <HeaderCell heading="مقالات جديدة" />
          </Box>
          <NewArticles />
        </Container>
      </Box>
     
    </Box>
  );
}
