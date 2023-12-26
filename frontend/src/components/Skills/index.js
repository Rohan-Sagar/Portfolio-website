import { Box, Grid, Typography, Paper, Divider, useTheme, useMediaQuery } from "@mui/material";
import { skillsTable } from "../../constants";

const levels = ['Beginner', 'Intermediate', 'Advanced'];

const groupByCategoryAndLevel = (skills) => {
  const grouped = {};
  skills.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = { Beginner: [], Intermediate: [], Advanced: [] };
    }
    grouped[skill.category][skill.type].push(skill);
  });
  return grouped;
};

function Skills() {
  const skillsByCategoryAndLevel = groupByCategoryAndLevel(skillsTable);
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <Box 
      id="skills"
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%', 
        height: '100%', 
        padding: '1rem 0 2rem 0', 
        borderTop: '2px solid #777',
        backgroundImage: `url('/assets/SimpleShiny.svg')`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "0.5rem",
            fontSize: {xs: "3rem", lg: "5rem"},
            fontFamily: "UfcFont, sans-serif",
            textAlign: "center",
            color: 'white'
          }}
        >
          Skills
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', bgcolor: 'background.dark', width: '100%' }}>
        {Object.entries(skillsByCategoryAndLevel).map(([category, skillsByLevel]) => (
          <Grid container spacing={3} alignItems="center" key={category}>
            <Grid item xs={12} lg={5}>
              <Typography variant="h4" sx={{ fontSize: { xs: '24px', lg: '32px' }, fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: 'white', textAlign: 'left' }}>
                {category}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Paper elevation={3} sx={{ padding: '2rem', color: 'white', bgcolor: '#333437', width: '100%', height: '100%' }}>
                <Grid container spacing={2} justifyContent="center">
                  {levels.map(level => (
                    <Grid item xs={12} sm={4} key={level}>
                      {isMobile ? (
                        <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                          {level}
                        </Typography>
                      ) : category === 'Programming Languages' && (
                        <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                          {level}
                        </Typography>
                      )}
                      <Divider sx={{ marginY: '1rem', bgcolor: 'grey.500' }} />
                      <Box display="flex" flexDirection="column" alignItems="center">
                        {skillsByLevel[level].map(skill => (
                          <Box key={skill.id} display="flex" alignItems="center" marginBottom={2} gap={1}>
                            <Box display="flex" justifyContent="center" minWidth="50px">
                              <img src={skill.link} alt={skill.name} style={{ width: '40px' }} />
                            </Box>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: 'white', fontSize: { xs: '14px', lg: '20px' }, fontWeight: 'bold' }}>
                              {skill.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  )
};

export default Skills;