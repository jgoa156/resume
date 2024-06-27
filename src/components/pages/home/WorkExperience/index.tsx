import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { useTranslation, Trans } from "react-i18next";

import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  SectionWrapper,
  ItemWrapper,
  Item,
  ItemTitle,
  ItemDescription
} from "./components";

export default function WorkExperience() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "work" });

  const jobsNsObject = Array.from(t("jobs", { returnObjects: true })) as any[];

  function JobItem({ job, initialCollapseState = false }) {
    const [open, setOpen] = useState(initialCollapseState);

    return (
      <FadeIn>
        <Item>
          <ItemTitle onClick={() => setOpen(!open)} aria-expanded={open}>
            <img src={job.icon} />

            <div className={"textWrapper"}>
              <h5>{job.name} <i className={`fas fa-chevron-${open ? "up" : "down"}`} /></h5>

              <p>{job.company} <span>{job.type}</span></p>
            </div>
          </ItemTitle>

          <Collapse in={open}>
            <ItemDescription>
              <p className={"details"}>{job.start} - {job.end}</p>
              <div>
                {job.description?.map((job, index) =>
                  job.links
                    ? <p key={index}>
                      <Trans
                        t={t}
                        defaults={job.content}
                        components={
                          Array.from(job.links?.map((link, index) =>
                            <a key={index} target={link.includes("https") ? "_blank" : "_self"} rel="noreferrer" href={link} />))
                        } />
                    </p>
                    : <p key={index}>{job.content}</p>
                )}
              </div>
            </ItemDescription>
          </Collapse>
        </Item>
      </FadeIn>
    );
  }

  return (
    <SectionWrapper id="work-experience">
      <div>
        <FadeIn>
          <Title>{t("title")}</Title>
        </FadeIn>

        <ItemWrapper>
          {jobsNsObject.map((job, index) => {
            return (
              <JobItem key={index} job={job} initialCollapseState={index === 0} />
            )
          })}
        </ItemWrapper>
      </div>
    </SectionWrapper>
  );
}
