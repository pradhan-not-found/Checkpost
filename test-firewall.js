// Using native fetch (Node 18+)

// Replace this with the API key generated when you add an agent in the dashboard
const AGENT_API_KEY = "cp_YOUR_API_KEY_HERE"; 
const DASHBOARD_URL = "http://localhost:3000";

async function testFirewallAgent() {
  console.log("🔥 Fetching policies from VibeForge Control Plane...");
  
  try {
    // 1. Fetch Policies
    const policyRes = await fetch(`${DASHBOARD_URL}/api/agent/policies`, {
      headers: { 'Authorization': `Bearer ${AGENT_API_KEY}` }
    });
    
    if (!policyRes.ok) {
      console.error("❌ Failed to fetch policies. Is the server running and API key correct?");
      return;
    }
    
    const policies = await policyRes.json();
    console.log("✅ Received Policies:", policies);

    console.log("\n🛡️ Simulating a malicious request from an external app...");
    // Simulate detecting a threat (e.g., SQL Injection)
    const threatPayload = {
      threatType: "SQL_INJECTION",
      ip: "192.168.1.100",
      url: "/login?user=' OR 1=1 --",
      timestamp: new Date().toISOString()
    };
    
    console.log("🚨 Threat detected! Blocking and sending log to VibeForge...");
    
    // 2. Send Threat Log
    const ingestRes = await fetch(`${DASHBOARD_URL}/api/agent/ingest`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${AGENT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(threatPayload)
    });
    
    if (ingestRes.ok) {
      console.log("✅ Threat logged successfully! Check your VibeForge dashboard.");
    } else {
      console.error("❌ Failed to log threat.");
    }

  } catch (err) {
    console.error("Error connecting to VibeForge:", err);
  }
}

testFirewallAgent();
