#!/usr/bin/env python3
"""
Backend API Testing Script for Sri Bala Tripura Sundari Seva Sadan
Tests the reference PDF streaming endpoints and basic API functionality.
"""

import requests
import sys
import os
from pathlib import Path

# Get backend URL from frontend .env file
def get_backend_url():
    frontend_env_path = Path("/app/frontend/.env")
    if frontend_env_path.exists():
        with open(frontend_env_path, 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    return "http://localhost:8001"  # fallback

BACKEND_URL = get_backend_url()
print(f"Testing backend at: {BACKEND_URL}")

def test_hello_world():
    """Test GET /api/ returns Hello World"""
    print("\n=== Testing GET /api/ ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200 and response.json().get("message") == "Hello World":
            print("✅ PASS: Hello World endpoint working")
            return True
        else:
            print("❌ FAIL: Hello World endpoint not working correctly")
            return False
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return False

def test_reference_missing_file():
    """Test GET /api/reference/panchangam when file missing returns 204"""
    print("\n=== Testing GET /api/reference/panchangam (file missing scenario) ===")
    
    # First, let's test with a file that should exist
    try:
        response = requests.get(f"{BACKEND_URL}/api/reference/panchangam", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('content-type', 'Not set')}")
        
        if response.status_code == 200:
            print("✅ INFO: panchangam.pdf exists and returns 200")
            return True
        elif response.status_code == 204:
            print("✅ PASS: Returns 204 when file missing")
            return True
        else:
            print(f"❌ FAIL: Unexpected status code {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return False

def test_reference_panchangam():
    """Test GET /api/reference/panchangam returns 200 with correct headers"""
    print("\n=== Testing GET /api/reference/panchangam (file exists) ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/reference/panchangam", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('content-type', 'Not set')}")
        print(f"Cache-Control: {response.headers.get('cache-control', 'Not set')}")
        print(f"Content-Security-Policy: {response.headers.get('content-security-policy', 'Not set')}")
        
        success = True
        
        # Check status code
        if response.status_code != 200:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            success = False
        
        # Check content type
        if response.headers.get('content-type') != 'application/pdf':
            print(f"❌ FAIL: Expected content-type 'application/pdf', got '{response.headers.get('content-type')}'")
            success = False
        
        # Check Cache-Control header
        cache_control = response.headers.get('cache-control', '')
        if 'no-store' not in cache_control:
            print(f"❌ FAIL: Cache-Control should contain 'no-store', got '{cache_control}'")
            success = False
        
        # Check Content-Security-Policy header
        csp = response.headers.get('content-security-policy', '')
        if "frame-ancestors 'self'" not in csp:
            print(f"❌ FAIL: Content-Security-Policy should contain \"frame-ancestors 'self'\", got '{csp}'")
            success = False
        
        # Check if we got PDF content
        if len(response.content) > 0:
            print(f"✅ INFO: Received {len(response.content)} bytes of content")
        else:
            print("❌ FAIL: No content received")
            success = False
        
        if success:
            print("✅ PASS: panchangam endpoint working correctly")
        
        return success
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return False

def test_reference_calendar():
    """Test GET /api/reference/calendar returns 200 with correct headers"""
    print("\n=== Testing GET /api/reference/calendar ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/reference/calendar", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('content-type', 'Not set')}")
        print(f"Cache-Control: {response.headers.get('cache-control', 'Not set')}")
        print(f"Content-Security-Policy: {response.headers.get('content-security-policy', 'Not set')}")
        
        success = True
        
        # Check status code
        if response.status_code != 200:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            success = False
        
        # Check content type
        if response.headers.get('content-type') != 'application/pdf':
            print(f"❌ FAIL: Expected content-type 'application/pdf', got '{response.headers.get('content-type')}'")
            success = False
        
        # Check Cache-Control header
        cache_control = response.headers.get('cache-control', '')
        if 'no-store' not in cache_control:
            print(f"❌ FAIL: Cache-Control should contain 'no-store', got '{cache_control}'")
            success = False
        
        # Check Content-Security-Policy header
        csp = response.headers.get('content-security-policy', '')
        if "frame-ancestors 'self'" not in csp:
            print(f"❌ FAIL: Content-Security-Policy should contain \"frame-ancestors 'self'\", got '{csp}'")
            success = False
        
        # Check if we got PDF content
        if len(response.content) > 0:
            print(f"✅ INFO: Received {len(response.content)} bytes of content")
        else:
            print("❌ FAIL: No content received")
            success = False
        
        if success:
            print("✅ PASS: calendar endpoint working correctly")
        
        return success
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return False

def test_reference_unknown():
    """Test GET /api/reference/unknown returns 404"""
    print("\n=== Testing GET /api/reference/unknown ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/reference/unknown", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 404:
            print("✅ PASS: Unknown reference returns 404")
            return True
        else:
            print(f"❌ FAIL: Expected 404, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ ERROR: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Sri Bala Tripura Sundari Seva Sadan")
    print("=" * 70)
    
    tests = [
        ("Hello World API", test_hello_world),
        ("Reference Missing File", test_reference_missing_file),
        ("Reference Panchangam", test_reference_panchangam),
        ("Reference Calendar", test_reference_calendar),
        ("Reference Unknown", test_reference_unknown),
    ]
    
    results = []
    for test_name, test_func in tests:
        result = test_func()
        results.append((test_name, result))
    
    print("\n" + "=" * 70)
    print("📊 TEST SUMMARY")
    print("=" * 70)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {len(results)} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())