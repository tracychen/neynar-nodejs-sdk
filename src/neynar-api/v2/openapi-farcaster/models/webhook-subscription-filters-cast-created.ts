/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface WebhookSubscriptionFiltersCastCreated
 */
export interface WebhookSubscriptionFiltersCastCreated {
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'author_fids'?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'mentioned_fids'?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'parent_urls'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'root_parent_urls'?: Array<string>;
    /**
     * Regex pattern to match the text key of the cast. **Note:**  1) Regex must be parsed by Go\'s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: (?i)\\\\$degen should be written as (?i)\\\\\\\\$degen 
     * @type {string}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'text'?: string;
    /**
     * Regex pattern to match the embeded_url (key embeds) of the cast. **Note:**  1) Regex must be parsed by Go\'s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: \\\\b(farcaster|neynar)\\\\b should be written as \\\\\\\\b(farcaster|neynar)\\\\\\\\b 
     * @type {string}
     * @memberof WebhookSubscriptionFiltersCastCreated
     */
    'embeds'?: string;
}

