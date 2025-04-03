import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Trans } from "next-i18next";

// Shared
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import { TagWrapper, Tag } from "components/shared/Tag";

// Custom
import {
  WorkExperienceWrapper,
  ItemWrapper,
  Item,
  ItemTitle,
  ItemDescription
} from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function WorkExperience({ t }: IDefaultComponentProps) {
  const jobsNsObject = Array.from(t("work.jobs", { returnObjects: true }) as any[]);

  function JobItem({ key, job, initialCollapseState = false }) {
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

          <Collapse in={open} children={<></>}>
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

              <TagWrapper>
                {job.tags?.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>
                })}
              </TagWrapper>
            </ItemDescription>
          </Collapse>
        </Item>
      </FadeIn>
    );
  }

  return (
    <WorkExperienceWrapper id="work-experience">
      <div>
        <FadeIn>
          <Title>{t("work.title")}</Title>
        </FadeIn>

        <ItemWrapper>
          {jobsNsObject.map((job, index) => {
            return (
              <JobItem key={index} job={job} initialCollapseState={index === 0} />
            )
          })}
        </ItemWrapper>
      </div>
    </WorkExperienceWrapper>
  );
}
