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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { RelevantFollowersResponse } from '../models';
/**
 * FollowsApi - axios parameter creator
 * @export
 */
export const FollowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of relevant followers for a specific FID.
         * @summary Retrieve relevant followers for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} targetFid User who\&#39;s profile you are looking at
         * @param {number} viewerFid Viewer who\&#39;s looking at the profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        relevantFollowers: async (apiKey: string, targetFid: number, viewerFid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('relevantFollowers', 'apiKey', apiKey)
            // verify required parameter 'targetFid' is not null or undefined
            assertParamExists('relevantFollowers', 'targetFid', targetFid)
            // verify required parameter 'viewerFid' is not null or undefined
            assertParamExists('relevantFollowers', 'viewerFid', viewerFid)
            const localVarPath = `/farcaster/followers/relevant`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (targetFid !== undefined) {
                localVarQueryParameter['target_fid'] = targetFid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FollowsApi - functional programming interface
 * @export
 */
export const FollowsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FollowsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of relevant followers for a specific FID.
         * @summary Retrieve relevant followers for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} targetFid User who\&#39;s profile you are looking at
         * @param {number} viewerFid Viewer who\&#39;s looking at the profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async relevantFollowers(apiKey: string, targetFid: number, viewerFid: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelevantFollowersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.relevantFollowers(apiKey, targetFid, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FollowsApi - factory interface
 * @export
 */
export const FollowsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FollowsApiFp(configuration)
    return {
        /**
         * Returns a list of relevant followers for a specific FID.
         * @summary Retrieve relevant followers for a given user
         * @param {string} apiKey API key required for authentication.
         * @param {number} targetFid User who\&#39;s profile you are looking at
         * @param {number} viewerFid Viewer who\&#39;s looking at the profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        relevantFollowers(apiKey: string, targetFid: number, viewerFid: number, options?: any): AxiosPromise<RelevantFollowersResponse> {
            return localVarFp.relevantFollowers(apiKey, targetFid, viewerFid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FollowsApi - object-oriented interface
 * @export
 * @class FollowsApi
 * @extends {BaseAPI}
 */
export class FollowsApi extends BaseAPI {
    /**
     * Returns a list of relevant followers for a specific FID.
     * @summary Retrieve relevant followers for a given user
     * @param {string} apiKey API key required for authentication.
     * @param {number} targetFid User who\&#39;s profile you are looking at
     * @param {number} viewerFid Viewer who\&#39;s looking at the profile
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     */
    public relevantFollowers(apiKey: string, targetFid: number, viewerFid: number, options?: AxiosRequestConfig) {
        return FollowsApiFp(this.configuration).relevantFollowers(apiKey, targetFid, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }
}
