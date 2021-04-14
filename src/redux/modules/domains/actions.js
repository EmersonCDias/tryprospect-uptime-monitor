export function addDomain(domain) {
  return {
    type: '@domains/ADD_DOMAIN',
    payload: { domain },
  };
}
