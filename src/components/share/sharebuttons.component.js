import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div class="flex flex-row justify-around w-full">
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true}/>
          </LinkedinShareButton>

          <EmailShareButton url={url} title={title}>
            <EmailIcon size={40} round={true}></EmailIcon>
          </EmailShareButton>

          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>

          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={40} round={true}></TelegramIcon>
          </TelegramShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}/>
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons