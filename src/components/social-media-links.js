import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Col, Image } from 'react-bootstrap';
const SocialMediaLinks = () => (
    <StaticQuery
        query={
            graphql`
            {
                allSocialMediaYaml {
                nodes {
                    platform {
                    name
                    page_url
                    profile_url
                    icon {
                        publicURL
                    }
                    }
                }
                }
            }
        `}
        render={data => (
            <div className="social-media-links">
                <ul>
                    {
                        data.allSocialMediaYaml.nodes.map((socialMedia) => {
                            return (
                                <li>
                                    <a href={socialMedia.platform.profile_url} title={socialMedia.platform.name}>
                                        <Image width={32} height={32} src={socialMedia.platform.icon.publicURL} alt={socialMedia.platform.name} title={socialMedia.platform.name} />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )}
    ></StaticQuery>
);

export default SocialMediaLinks