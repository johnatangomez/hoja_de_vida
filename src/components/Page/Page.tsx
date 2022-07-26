import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import TitleSection from './TitleSection/TitleSection';
import { useTranslation } from 'react-i18next';
import './Page.css'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import works from '../../content/works.json';
import education from '../../content/education.json';
import portfolio from '../../content/languages.json';
import courses from '../../content/courses.json';
import { LANGUAGES } from '../../shared/Constants/Anchors';

const Page = () => {
    const { t } = useTranslation('Page');

    return <div className="Page">
        <TitleSection id="biography" content={t('Biography')} />
        <Paper className="Article Biography">
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Avatar style={{ filter: "grayscale(80%) drop-shadow(0px 1px 2px #0004)" }} className="Avatar" src="images/foto_p.png" />
                    <Typography style={{ marginTop: '4px' }} className="Centered" variant="subtitle1" component="h2">
                        Johnatan Andrés Gómez Monsalve
                    </Typography>
                    <Typography style={{ marginTop: '4px' }} className="Centered" variant="subtitle1" component="h2">
                         johnatana.gomez@udea.edu.co
                    </Typography>
                    <div className="Centered">
                        <a href="https://github.com/johnatangomez" target="_blank" rel="noreferrer" className="fab fa-linkedin"></a>
                        <a href="https://github.com/johnatangomez" target="_blank" rel="noreferrer" className="fab fa-github"></a>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography className="Centered" variant="subtitle1" component="p">
                        {t("Subtitle")}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t("AboutMe1")}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t("AboutMe2")}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t("AboutMe3")}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>

        <TitleSection id="work" content={t('Work')} />
        <Paper className="Timeline">
            <Timeline>
                {works.map(work => {
                    const newBusiness = work.business !== undefined;

                    let hourClasses = "TimelineHour";
                    if (!newBusiness) {
                        hourClasses = `${hourClasses} TimelineHourNoIcon`;
                    }

                    let contentClasses = "TimelineContent";
                    if (!newBusiness) {
                        contentClasses = `${contentClasses} TimelineContentNoIcon`;
                    }

                    return <TimelineItem>
                        <TimelineOppositeContent className={hourClasses}>
                            <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`${t(work.date.from.month)} ${work.date.from.year}`}
                            </Typography>
                            {work.date.to && <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`- ${t(work.date.to.month)} ${work.date.to.year}`}
                            </Typography>}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={work.color ? { backgroundColor: work.color } : undefined}>
                                { work.icon ? <img className="Icon" src={work.icon} /> : undefined }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper variant="outlined" className={contentClasses}>
                                {work.work ? <Typography variant="h6" component="h2">
                                    {t(work.work)}
                                </Typography> : undefined}
                                {work.business ? <Typography variant="subtitle1" component="h3" color="textSecondary">
                                    {work.business}
                                </Typography> : undefined}
                                <Typography variant="subtitle2" component="h4" color="textSecondary">
                                    {t(work.contract)}
                                </Typography>
                                {work.skills ? <ul>
                                    {work.skills.map(skill => 
                                        <Typography variant="body1" component="li">
                                            {t(skill)}
                                        </Typography>
                                    )}
                                </ul> : undefined}
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </Paper>

        <TitleSection id="education" content={t('Education')} />
        <Paper className="Timeline">
            <Timeline>
                {education.map(study => {
                    const newStudy = study.institution !== undefined;

                    let hourClasses = "TimelineHour";
                    if (!newStudy) {
                        hourClasses = `${hourClasses} TimelineHourNoIcon`;
                    }

                    let contentClasses = "TimelineContent";
                    if (!newStudy) {
                        contentClasses = `${contentClasses} TimelineContentNoIcon`;
                    }

                    return <TimelineItem>
                        <TimelineOppositeContent className={hourClasses}>
                            <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`${study.date.from.year}`}
                            </Typography>
                            {study.date.to && <Typography className="TimelineHourLine" variant="subtitle2" color="textSecondary">
                                {`- ${study.date.to.year}`}
                            </Typography>}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={study.color ? { backgroundColor: study.color } : undefined}>
                                { study.icon ? <img className="Icon" src={study.icon} /> : undefined }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper variant="outlined" className={contentClasses}>
                                {study.study ? <Typography variant="h6" component="h2">
                                    {t(study.study)}
                                </Typography> : undefined}
                                {study.institution ? <Typography variant="subtitle1" component="h3" color="textSecondary">
                                    {study.institution}
                                </Typography> : undefined}
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </Paper>

        <TitleSection id="languages" content={t('Interes_hab')} />
        <Paper className="Timeline" >
        <Timeline>
                {portfolio.map(study => {
                    const newStudy = study.activitie !== undefined;

                    let hourClasses = "TimelineHour";
                    if (!newStudy) {
                        hourClasses = `${hourClasses} TimelineHourNoIcon`;
                    }

                    let contentClasses = "TimelineContent";
                    if (!newStudy) {
                        contentClasses = `${contentClasses} TimelineContentNoIcon`;
                    }

                    return <TimelineItem>
                        <TimelineOppositeContent className={hourClasses}>
                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={study.color ? { backgroundColor: study.color } : undefined}>
                                { study.icon ? <img className="Icon" src={study.icon} /> : undefined }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper variant="outlined" className={contentClasses}>
                                {study.activitie ? <Typography variant="h6" component="h2">
                                    {t(study.activitie)}
                                </Typography> : undefined}
                                
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </Paper>

        <TitleSection id="cursos" content={t('cursos')} />
        <Paper className="Timeline" >
        <Timeline>
                {courses.map(study => {
                    const newStudy = study.activitie !== undefined;

                    let hourClasses = "TimelineHour";
                    if (!newStudy) {
                        hourClasses = `${hourClasses} TimelineHourNoIcon`;
                    }

                    let contentClasses = "TimelineContent";
                    if (!newStudy) {
                        contentClasses = `${contentClasses} TimelineContentNoIcon`;
                    }

                    return <TimelineItem>
                        <TimelineOppositeContent className={hourClasses}>
                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={study.color ? { backgroundColor: study.color } : undefined}>
                                { study.icon ? <img className="Icon" src={study.icon} /> : undefined }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper variant="outlined" className={contentClasses}>
                                {study.activitie ? <Typography variant="h6" component="h2">
                                    {t(study.activitie)}
                                </Typography> : undefined}
                                
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>
        </Paper>
    </div>
};

export default Page;