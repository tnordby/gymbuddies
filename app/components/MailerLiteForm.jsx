"use client";

import { useEffect } from "react";
import Script from "next/script";

import "./mailerlite-embed.css";

const WEBFORMS_SRC =
  "https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b";

export default function MailerLiteForm() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.ml_webform_success_40016244 = function ml_webform_success_40016244() {
      const $ = window.ml_jQuery || window.jQuery;
      if (!$) return;
      $(".ml-subscribe-form-40016244 .row-success").show();
      $(".ml-subscribe-form-40016244 .row-form").hide();
    };

    fetch("https://assets.mailerlite.com/jsonp/2272856/forms/184917944053007978/takel").catch(
      () => {}
    );
  }, []);

  return (
    <div className="mailerlite-embed-root mx-auto w-full max-w-3xl">
      <div id="mlb2-40016244" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-40016244">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{ marginBottom: 0 }} />

              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/2272856/forms/184917944053007978/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        className="form-control"
                        name="fields[email]"
                        placeholder="Your email address"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />

                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">
                    Join Waitlist ⚡
                  </button>
                  <button disabled={true} style={{ display: "none" }} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad" />
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>

                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{ display: "none" }}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our waitlist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src={WEBFORMS_SRC} strategy="afterInteractive" />
    </div>
  );
}
