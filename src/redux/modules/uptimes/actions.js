export function getUptimeRequest(domain) {
  return {
    type: '@uptimes/LIST_REQUEST',
    payload: { domain },
  };
}

export function getUptimeResponse(data) {
  return {
    type: '@uptimes/LIST_RESPONSE',
    payload: { data },
  };
}
